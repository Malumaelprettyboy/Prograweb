
(function () {
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelectorAll('.theme-icon').forEach(function (icon) {
      icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTheme(root.getAttribute('data-theme') || 'light');

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
    });
  });
})();
