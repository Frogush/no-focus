// === ИНИЦИАЛИЗАЦИЯ ТЕМЫ ПРИ ЗАГРУЗКЕ САЙТА ===
// Проверяет localStorage и устанавливает сохранённую тему
(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
  }
})();

// === ПОДКЛЮЧЕНИЕ МАНИФЕСТА В ЗАВИСИМОСТИ ОТ ТЕМЫ СИСТЕМЫ ===
// Определяет, тёмная ли тема у пользователя, и подключает нужный .webmanifest
(function initManifest() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const manifestPath = isDark
    ? '/images/site-dark.webmanifest'
    : '/images/site-light.webmanifest';

  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = manifestPath;
  document.head.appendChild(link);
})();

// === ОБРАБОТКА СОБЫТИЙ ПОСЛЕ ЗАГРУЗКИ DOM ===
document.addEventListener('DOMContentLoaded', () => {
  // Определяем текущую тему по классу на <html>
  const currentTheme = [...document.documentElement.classList]
    .find(cn => cn.startsWith('theme-'))
    ?.replace('theme-', '');

  // Получаем все кнопки смены темы
  const themeButtons = [
    ...document.querySelectorAll('.header__theme-menu-button'),
  ];

  // Устанавливаем активную кнопку
  setActiveButton(themeButtons, currentTheme);

  // Назначаем обработчики на кнопки
  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const chosenTheme = [...button.classList]
        .find(cn => cn.includes('_type_'))
        .split('_type_')[1];
      setTheme(chosenTheme);
      setActiveButton(themeButtons, chosenTheme);
    });
  });
});

// === ФУНКЦИЯ УСТАНОВКИ ТЕМЫ ===
// Меняет класс <html> на выбранную тему и сохраняет её в localStorage
function setTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

// === ФУНКЦИЯ УСТАНОВКИ АКТИВНОЙ КНОПКИ ===
// Снимает выделение со всех кнопок и активирует ту, что соответствует текущей теме
function setActiveButton(buttonsArray, theme) {
  buttonsArray.forEach(button => {
    button.classList.remove('header__theme-menu-button_active');
    button.removeAttribute('disabled');
  });

  const target = buttonsArray.find(button =>
    button.classList.contains(`header__theme-menu-button_type_${theme}`)
  );

  if (target) {
    target.classList.add('header__theme-menu-button_active');
    target.setAttribute('disabled', true);
  } else {
    const autoButton = document.querySelector(
      '.header__theme-menu-button_type_auto'
    );
    autoButton.classList.add('header__theme-menu-button_active');
    autoButton.setAttribute('disabled', true);
  }
}
