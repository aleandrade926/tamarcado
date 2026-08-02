import os

# Caminhos do projeto
PROJECT_DIR = r"c:\Users\Alexandre\masterkey-frontend"
SOURCE_DIR = os.path.join(PROJECT_DIR, "src", "todeacordo")
API_DIR = os.path.join(PROJECT_DIR, "api")
OUTPUT_FILE = os.path.join(PROJECT_DIR, "todeacordo_codebase.md")

# Extensões de arquivos de interesse
EXTENSIONS = ('.ts', '.tsx', '.json', '.html', '.css', '.js')

# Pastas a ignorar
IGNORE_DIRS = {'node_modules', 'dist', '.vercel', '.git', '__pycache__', 'scratch'}

def consolidate():
    print("Iniciando a consolidação do código do ToDeAcordo...")
    count = 0
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        outfile.write("# Codebase Consolidada do ToDeAcordo\n\n")
        outfile.write("Este documento contém todo o código-fonte relevante do ToDeAcordo para importação no NotebookLM, Gemini 1.5 Pro ou ChatGPT.\n\n")
        
        # Função para varrer e gravar arquivos
        def scan_and_write(directory):
            nonlocal count
            for root, dirs, files in os.walk(directory):
                # Filtra diretórios ignorados
                dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
                
                for file in files:
                    if file.endswith(EXTENSIONS):
                        filepath = os.path.join(root, file)
                        rel_path = os.path.relpath(filepath, PROJECT_DIR)
                        
                        # Evita incluir backups redundantes
                        if "backup" in file.lower() or "temp" in file.lower():
                            continue
                            
                        try:
                            with open(filepath, 'r', encoding='utf-8') as infile:
                                content = infile.read()
                            
                            outfile.write(f"\n## Arquivo: {rel_path}\n")
                            # Detecta extensão para syntax highlighting no markdown
                            lang = file.split('.')[-1]
                            if lang == 'tsx':
                                lang = 'typescript'
                            elif lang == 'ts':
                                lang = 'typescript'
                            elif lang == 'js':
                                lang = 'javascript'
                                
                            outfile.write(f"```{lang}\n")
                            outfile.write(content)
                            outfile.write("\n```\n")
                            outfile.write("\n---\n")
                            count += 1
                            print(f"Incluído: {rel_path}")
                        except Exception as e:
                            print(f"Erro ao ler {rel_path}: {e}")

        # Varre a pasta do ToDeAcordo
        scan_and_write(SOURCE_DIR)
        
        # Varre as APIs serverless na raiz
        scan_and_write(API_DIR)
        
    print(f"\nSucesso! {count} arquivos consolidados em: {OUTPUT_FILE}")

if __name__ == "__main__":
    consolidate()
