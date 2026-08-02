import json
import os

LOG_FILE = r"C:\Users\Alexandre\.gemini\antigravity\brain\1b1bab8a-d610-463f-9bbf-4731d68556eb\.system_generated\logs\transcript_full.jsonl"
OUTPUT_FILE = r"c:\Users\Alexandre\masterkey-frontend\todeacordo_chat_history.md"

def generate_markdown_history():
    print("Iniciando a leitura do histórico de chat...")
    if not os.path.exists(LOG_FILE):
        print("Arquivo de log não encontrado!")
        return
        
    chat_entries = []
    
    with open(LOG_FILE, 'r', encoding='utf-8') as f:
        for line in f:
            if not line.strip():
                continue
            try:
                data = json.loads(line)
                step_type = data.get("type")
                source = data.get("source")
                content = data.get("content", "")
                
                # Coleta entradas do Usuário
                if step_type == "USER_INPUT" or source == "USER_EXPLICIT":
                    chat_entries.append({
                        "role": "Usuário",
                        "content": content
                    })
                # Coleta entradas da IA
                elif step_type == "PLANNER_RESPONSE" or source == "MODEL":
                    # Se for resposta do modelo, o content costuma conter a resposta final
                    # Se o content for nulo ou vazio, tentamos buscar no objeto
                    if content:
                        chat_entries.append({
                            "role": "Antigravity",
                            "content": content
                        })
            except Exception as e:
                pass

    print(f"Total de mensagens extraídas: {len(chat_entries)}")
    
    # Encontra onde começa o assunto todeacordo.com.br
    start_index = 0
    for idx, entry in enumerate(chat_entries):
        text = entry["content"].lower() if entry["content"] else ""
        if "todeacordo" in text or "acordo" in text or "meet" in text:
            start_index = idx
            print(f"Início identificado sobre o ToDeAcordo na mensagem {idx}: '{entry['content'][:50]}...'")
            break

    # Grava o histórico formatado
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        outfile.write("# Histórico Completo de Chat — ToDeAcordo\n\n")
        outfile.write("Esta é a transcrição consolidade de todas as interações e decisões sobre o ToDeAcordo.\n\n")
        
        for idx in range(start_index, len(chat_entries)):
            entry = chat_entries[idx]
            role = entry["role"]
            content = entry["content"]
            
            if not content or not content.strip():
                continue
                
            outfile.write(f"## 👤 {role}\n\n" if role == "Usuário" else f"## 🤖 {role}\n\n")
            outfile.write(content.strip())
            outfile.write("\n\n---\n\n")
            
    print(f"Arquivo de histórico criado com sucesso em: {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_markdown_history()
