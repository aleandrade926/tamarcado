import os
from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 15)
        self.cell(0, 10, 'Checklist de Evidências para Chargeback'.encode('latin-1', 'replace').decode('latin-1'), 0, 1, 'C')
        self.set_font('Arial', 'I', 10)
        self.cell(0, 10, 'O que enviar à adquirente (Piloto)'.encode('latin-1', 'replace').decode('latin-1'), 0, 1, 'C')
        self.ln(2)
        self.set_font('Arial', '', 9)
        self.cell(0, 10, 'Aviso: Checklist geral. Confirme os documentos exigidos pela sua adquirente ou gateway.'.encode('latin-1', 'replace').decode('latin-1'), 0, 1, 'C')
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, 'Aviso: A organização destas evidências não garante reversão. Decisão exclusiva do banco emissor.'.encode('latin-1', 'replace').decode('latin-1'), 0, 0, 'C')

def create_checklist():
    pdf = PDF()
    pdf.add_page()
    pdf.set_font('Arial', '', 11)

    items = [
        "1. Identificação da Transação: NSU, Código de Autorização, Data, Valor exato e BIN do cartão.",
        "2. Motivo Informado do Chargeback: Qual o código retornado pela adquirente? (Ex: Desacordo, Fraude).",
        "3. Comprovante do Pedido: Tela do sistema mostrando os itens, endereço e IP de compra.",
        "4. Comprovante de Pagamento: Recibo gerado pelo gateway confirmando a aprovação do cartão.",
        "5. Nota Fiscal: DANFE da NF-e vinculada aos mesmos dados do comprador, se existente.",
        "6. Rastreamento e Entrega: Código de rastreio, transportadora e print do status 'Entregue'.",
        "7. Confirmação de Recebimento: AR (Aviso de Recebimento) assinado, ou canhoto da transportadora.",
        "8. Comunicações com o Comprador: Logs de e-mail, prints de WhatsApp (mostrando o número/confirmação).",
        "9. Política Aceita pelo Comprador: Print dos termos de serviço ou check de aceite no checkout.",
        "10. Registros Adicionais Disponíveis: Antifraude (score), matches de redes sociais ou outras provas de vínculo.",
        "11. Confira no aviso recebido ou no painel da adquirente o prazo específico para a contestação. Os prazos variam conforme o meio de pagamento e o motivo informado."
    ]

    for item in items:
        encoded_item = item.encode('latin-1', 'replace').decode('latin-1')
        pdf.multi_cell(0, 8, encoded_item)
        pdf.ln(2)

    pdf.ln(10)
    pdf.set_font('Arial', 'B', 10)
    pdf.multi_cell(0, 8, "COMO USAR ESTE CHECKLIST:")
    pdf.set_font('Arial', '', 10)
    pdf.multi_cell(0, 8, "Junte todos esses documentos em um único PDF (Dossiê) ordenado logicamente. Envie para o painel de contestação da sua adquirente antes do fim do prazo.".encode('latin-1', 'replace').decode('latin-1'))

    output_path = r"c:\Users\Alexandre\masterkey-frontend\fake-door-chargeback\checklist-chargeback.pdf"
    pdf.output(output_path)

if __name__ == '__main__':
    create_checklist()
