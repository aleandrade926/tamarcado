const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function runExtraction(htmlContent, testName) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  let scrapedRole = '';
  let scrapedCompany = '';
  let company = '';
  let role = '';
  let currentExperienceFound = false;

  function isCurrentExperience(text) {
    const t = text.toLowerCase();
    return t.includes('o momento') || t.includes('present') || t.includes('atualmente');
  }

  function cleanFieldText(text) {
    return text.split('·')[0].split('•')[0].trim();
  }

  function getDeduplicatedLines(element) {
    const lines = [];
    element.textContent.split('\n').map(l => l.trim()).forEach(l => {
      if (l.length > 0 && lines[lines.length - 1] !== l) {
        lines.push(l);
      }
    });
    return lines;
  }
  
  function isInvalidCompany(c) {
      if (!c) return true;
      const cl = c.toLowerCase().trim();
      if (cl.length < 2) return true;
      if (/^(mais|more|ver mais|show more|outros|others|mais\s\d+|ver\s.*)$/.test(cl)) return true;
      if (/general counsel|legal executive|head of legal|clo|ceo|cto|cfo|director|manager|lawyer/i.test(cl)) return true;
      if (/ensino|school|universidade|university|faculdade|college/i.test(cl)) return true;
      if (/conexão|conexões|connection|connections|seguidor|seguidores|visualizar|mensagem|informações de contato|contact info/i.test(cl)) return true;
      if (/miami|florida|estados unidos|united states|brasil|brazil|são paulo|rio de janeiro/i.test(cl)) return true;
      return false;
  }

  let expSection = document.querySelector('section#experience');
  if (expSection) {
    const expItems = Array.from(expSection.querySelectorAll('li.artdeco-list__item'));
    for (const item of expItems) {
      const parentLi = item.parentElement.closest('li');
      if (parentLi) continue;

      const lines = getDeduplicatedLines(item);
      const nestedUl = item.querySelector('.pvs-entity__sub-components ul');

      if (nestedUl) {
        const parentCompany = cleanFieldText(lines[0]); 
        const subItems = Array.from(nestedUl.querySelectorAll('li'));
        for (const subItem of subItems) {
          if (subItem.parentElement.closest('li') !== item) continue; 
          
          const subLines = getDeduplicatedLines(subItem);
          if (subLines.length >= 2) {
            const roleCandidate = cleanFieldText(subLines[0]); 
            const periodCandidate = subLines[1]; 
            if (isCurrentExperience(periodCandidate)) {
              scrapedCompany = parentCompany;
              scrapedRole = roleCandidate;
              currentExperienceFound = true;
              break;
            }
          }
        }
      } else {
        if (lines.length >= 3) {
          const roleCandidate = cleanFieldText(lines[0]); 
          const companyCandidate = cleanFieldText(lines[1]); 
          const periodCandidate = lines[2]; 
          if (isCurrentExperience(periodCandidate)) {
             scrapedCompany = companyCandidate;
             scrapedRole = roleCandidate;
             currentExperienceFound = true;
          }
        } else if (lines.length === 2) {
          const roleCandidate = cleanFieldText(lines[0]);
          const periodCandidate = lines[1];
          if (isCurrentExperience(periodCandidate) && /independente|freelance|autônomo/i.test(roleCandidate)) {
             scrapedCompany = "";
             scrapedRole = roleCandidate;
             currentExperienceFound = true;
          }
        }
      }
      if (currentExperienceFound) break; 
    }
  }

  role = scrapedRole || "";
  company = "";

  const isIndependent = /independente|freelance|autônomo/i.test(role);
  if (isIndependent && !scrapedCompany) {
    company = "";
  } else if (scrapedCompany && !isInvalidCompany(scrapedCompany)) {
    company = scrapedCompany; 
  } else {
    const topCardContainer = document.querySelector('.ph5.pb5, .pv-top-card, .mt2.relative');
    if (topCardContainer) {
      const topCardCompany = topCardContainer.querySelector('[data-estimated-current-company="true"], [data-field="experience_member_company_single_line"]');
      if (topCardCompany) {
          const c = topCardCompany.textContent.replace(/\n.*/, '').trim();
          if (!isInvalidCompany(c)) company = c;
      }
    }
  }

  console.log(`[TESTE ${testName}]`);
  console.log(`Cargo: ${role}`);
  console.log(`Empresa: ${company}`);
  console.log('---------------------------');
}

// A. João Bocater: Chief Financial Officer / Hortifruti
runExtraction(`
  <html>
    <body>
      <section id="experience">
        <ul>
          <li class="artdeco-list__item">
            <div>
              <span>Chief Financial Officer</span>
              <span>Chief Financial Officer</span>
            </div>
            <div>
              <span>Hortifruti · Full-time</span>
              <span>Hortifruti · Full-time</span>
            </div>
            <div>
              <span>Jan 2020 - o momento · 4 yrs 2 mos</span>
              <span>Jan 2020 - o momento · 4 yrs 2 mos</span>
            </div>
            <div>
              <span>Rio de Janeiro, Brazil</span>
            </div>
          </li>
        </ul>
      </section>
    </body>
  </html>
`, 'A. João Bocater');

// B. Profissional independente
runExtraction(`
  <html>
    <body>
      <section id="experience">
        <ul>
          <li class="artdeco-list__item">
            <div>
              <span>Consultor independente</span>
              <span>Consultor independente</span>
            </div>
            <div>
              <span>Jan 2022 - Present · 2 yrs</span>
              <span>Jan 2022 - Present · 2 yrs</span>
            </div>
          </li>
        </ul>
      </section>
    </body>
  </html>
`, 'B. Profissional independente');

// C. Promoção interna
runExtraction(`
  <html>
    <body>
      <section id="experience">
        <ul>
          <li class="artdeco-list__item">
            <div>
              <span>Empresa Tech</span>
            </div>
            <div>
              <span>4 yrs 2 mos</span>
            </div>
            <div class="pvs-entity__sub-components">
              <ul>
                <li>
                   <div><span>Diretor de TI</span></div>
                   <div><span>Jan 2023 - Present · 1 yr</span></div>
                </li>
                <li>
                   <div><span>Gerente de Projetos</span></div>
                   <div><span>Jan 2020 - Jan 2023 · 3 yrs</span></div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </body>
  </html>
`, 'C. Promoção interna');

// D. Experiência simples
runExtraction(`
  <html>
    <body>
      <section id="experience">
        <ul>
          <li class="artdeco-list__item">
            <div><span>Engenheiro de Software</span></div>
            <div><span>Google · Tempo integral</span></div>
            <div><span>Fev 2021 - atualmente · 3 yrs</span></div>
          </li>
        </ul>
      </section>
    </body>
  </html>
`, 'D. Experiência simples');

// E. Página com Colégio Catamara na lateral (fora de experience e fora do top card)
runExtraction(`
  <html>
    <body>
      <div class="pv-top-card">
         <!-- No company in top card -->
      </div>
      
      <!-- Barra lateral recomendando empresas -->
      <aside>
        <a href="/company/colegio-catamara">Colégio Catamara</a>
      </aside>

      <section id="experience">
        <!-- Vazio ou experiência antiga sem current -->
        <ul>
          <li class="artdeco-list__item">
            <div><span>Analista</span></div>
            <div><span>Velha S.A.</span></div>
            <div><span>2015 - 2018</span></div>
          </li>
        </ul>
      </section>
    </body>
  </html>
`, 'E. Lateral ignorada');
