
// Simple editable content stored in localStorage; admin can edit via /admin.html
const defaults = {
  tabs: {
    'wsparcie': 'Treść: Ubezpieczenie Wsparcie Najbliższych – edytowalna sekcja.',
    'perspektywa': 'Treść: Perspektywa na Przyszłość – edytowalna sekcja.',
    'ochrona': 'Treść: Ochrona Każdego Dnia – edytowalna sekcja.',
    'umowy': 'Treść: Umowy Dodatkowe – edytowalna sekcja.'
  },
  medical: 'Treść pakietu medycznego – edytowalna sekcja.',
  group: {
    'zycie': 'Treść: Zabezpieczenie Życia – edytowalna.',
    'zdrowie': 'Treść: Zabezpieczenie Zdrowia – edytowalna.',
    'pakiet': 'Treść: Pakiet Zabezpieczenie Życia i Zdrowia – edytowalna.'
  },
  contacts: {
    phone: '884296188',
    facebook: 'https://www.facebook.com/share/1LLNTYCsj9/?mibextid=wwXIfr',
    whatsapp: 'https://wa.me/48884296188'
  }
};

function loadData(){
  const data = JSON.parse(localStorage.getItem('pzu_data') || 'null');
  return data || defaults;
}

function saveData(d){ localStorage.setItem('pzu_data', JSON.stringify(d)); }

function render(){
  const d = loadData();
  const content = document.getElementById('tabcontent');
  content.innerText = d.tabs.wsparcie;
  document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click', e=>{
    const k = e.target.dataset.key;
    content.innerText = d.tabs[k] || '';
  }));
  document.getElementById('medicalContent').innerText = d.medical;
  const gcont = document.getElementById('groupcontent');
  gcont.innerText = d.group.zycie;
  document.querySelectorAll('.gtab').forEach(b=>b.addEventListener('click', e=>{
    const k = e.target.dataset.key;
    gcont.innerText = d.group[k] || '';
  }));
}

document.addEventListener('DOMContentLoaded', function(){ render(); });
