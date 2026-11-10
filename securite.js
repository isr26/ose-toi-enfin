// Ose Toi, Enfin : empêche l'affichage du site à l'intérieur de la page d'un autre site (« clickjacking »).
// GitHub Pages ne permet pas d'envoyer l'en-tête de sécurité prévu pour cela, d'où ce petit script.
// Il n'agit que sur le site en ligne : l'aperçu local et les outils d'édition ne sont pas touchés.
(function () {
  if (window.top === window.self) return;
  if (!/(^|\.)osetoienfin\.ch$/.test(window.location.hostname)) return;
  document.documentElement.style.visibility = 'hidden';
  try {
    window.top.location.replace(window.self.location.href);
  } catch (e) {
    // Le site qui l'encadre bloque la redirection : la page reste masquée.
  }
})();
