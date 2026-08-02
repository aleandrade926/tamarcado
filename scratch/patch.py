import os
import re

file_path = r"c:\Users\Alexandre\masterkey-frontend\src\todeacordo\src\dashboard\ValidationPage.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add ENABLE_LEGACY_OBJECTION_FLOW
content = content.replace(
    "const ENABLE_SIGNATURE_FLOW = false;",
    "const ENABLE_SIGNATURE_FLOW = false;\nconst ENABLE_LEGACY_OBJECTION_FLOW = false;"
)

# 2. Add simple objection state
state_search = """  // Objection V2 State
  const [showObjectionModal, setShowObjectionModal] = useState(false);
  const [itemObjections, setItemObjections] = useState<Record<string, {status: 'accepted'|'adjust'|'rejected', note: string}>>({});
  const [generalObjection, setGeneralObjection] = useState('');"""
state_replace = state_search + """

  // Simple Objection State (QA 013)
  const [showSimpleObjectionModal, setShowSimpleObjectionModal] = useState(false);
  const [simpleObjectionText, setSimpleObjectionText] = useState('');"""
content = content.replace(state_search, state_replace)

# 3. Handle simple confirm and clipboard
confirm_search = """  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Confirmação copiada. Envie à outra parte.");
    } catch (err) {
      alert("Erro ao copiar confirmação.");
    }
  };

  const handleSimpleConfirm = async () => {
    if (consensus && consensus.id !== 'demo') {
      try {
        await saveConsensus(consensus);
      } catch (e) {
        console.error('Falha ao salvar consenso antes de confirmar', e);
      }
    }
    const version = consensus?.current_version || 1;
    const link = `${window.location.origin}/app?route=/valida/${consensus?.id}`;
    const text = `Li e estou de acordo com a Versão ${version} deste entendimento: ${link}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Confirmação de Entendimento',
          text: text,
        });
      } catch (err) {
        console.error('Error sharing:', err);
        await copyToClipboard(text);
      }
    } else {
      await copyToClipboard(text);
    }
  };"""

confirm_replace = """  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Mensagem copiada. Envie à outra parte.");
    } catch (err) {
      alert("Erro ao copiar mensagem.");
    }
  };

  const handleSimpleConfirm = async () => {
    const nomeInput = window.prompt("Qual o seu nome? Deixe em branco para continuar como Parte 2.");
    if (nomeInput === null) return;
    const nome = nomeInput.trim() || "Parte 2";
    
    const version = consensus?.current_version || 1;
    const link = `${window.location.origin}/app?route=/valida/${consensus?.id}`;
    const text = `CONFIRMAÇÃO — ToDeAcordo\\n\\n${nome} informou que está de acordo com:\\n\\nEntendimento: ${consensus?.title || 'Sem título'}\\nVersão: ${version}\\n\\nLink:\\n${link}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          text: text,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          await copyToClipboard(text);
        }
      }
    } else {
      await copyToClipboard(text);
    }
  };"""
# Note: Since the original file is encoded as UTF-8, some characters in my regex might not perfectly match if they were saved differently. Let's do a more robust replacement for the confirm function using regex.

import re
# We'll replace handleSimpleConfirm more carefully
content = re.sub(
    r"  const copyToClipboard = async \(text: string\) => \{[\s\S]*?const handleSimpleConfirm = async \(\) => \{[\s\S]*?  \};\n",
    confirm_replace + "\n",
    content
)

# 4. Handle Objection Click
objclick_search = """  const handleObjectionClick = () => {
    if (!signerName.trim() || !claimEmail.trim()) {
      setPendingAction('objection');
      setShowClaimModal(true);
    } else {
      setShowObjectionModal(true);
    }
  };"""
objclick_replace = """  const handleObjectionClick = () => {
    if (ENABLE_LEGACY_OBJECTION_FLOW) {
      if (!signerName.trim() || !claimEmail.trim()) {
        setPendingAction('objection');
        setShowClaimModal(true);
      } else {
        setShowObjectionModal(true);
      }
    } else {
      setShowSimpleObjectionModal(true);
    }
  };

  const handleSimpleObjectionSubmitShare = async () => {
    if (!simpleObjectionText.trim()) return alert("Por favor, digite a sugestão de ajuste.");
    
    const version = consensus?.current_version || 1;
    const link = `${window.location.origin}/app?route=/valida/${consensus?.id}`;
    const text = `SUGESTÃO DE AJUSTE — ToDeAcordo\\n\\nEntendimento: ${consensus?.title || 'Sem título'}\\nVersão: ${version}\\n\\nSugestão:\\n${simpleObjectionText}\\n\\nLink:\\n${link}`;

    if (navigator.share) {
      try {
        await navigator.share({ text: text });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          await copyToClipboard(text);
        }
      }
    } else {
      await copyToClipboard(text);
    }
    
    setShowSimpleObjectionModal(false);
    setSimpleObjectionText('');
  };"""
content = content.replace(objclick_search, objclick_replace)

# 5. JSX Modal
modal_search = "          {/* Objection V2 Modal */}\n          {showObjectionModal && ("
modal_replace = """          {/* Simple Objection Modal (QA 013) */}
          {showSimpleObjectionModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden flex flex-col my-8">
                <div className="bg-amber-50 px-6 py-4 border-b border-amber-200 flex justify-between items-center sticky top-0 z-10">
                  <h3 className="font-bold text-amber-900 text-lg flex items-center gap-2">
                    <span className="text-xl">✍️</span> Sugerir Ajuste
                  </h3>
                  <button onClick={() => setShowSimpleObjectionModal(false)} className="text-amber-700 hover:text-amber-900">
                    ✕
                  </button>
                </div>
                
                <div className="p-6">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Qual alteração você propõe?</label>
                  <textarea 
                    value={simpleObjectionText}
                    onChange={e => setSimpleObjectionText(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 min-h-[120px]"
                    placeholder="Ex: O prazo deveria ser dia 20, e não dia 15..."
                  ></textarea>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 sticky bottom-0 z-10">
                  <button 
                    onClick={() => setShowSimpleObjectionModal(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleSimpleObjectionSubmitShare}
                    className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded shadow-sm"
                  >
                    Gerar Mensagem
                  </button>
                </div>
              </div>
            </div>
          )}

""" + modal_search
content = content.replace(modal_search, modal_replace)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated ValidationPage.tsx successfully.")
