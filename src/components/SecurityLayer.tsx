// src/components/SecurityLayer.tsx
import { useEffect } from 'react';

const SecurityLayer: React.FC = () => {
  useEffect(() => {
    const disableClipboard = (e: ClipboardEvent) => {
      e.preventDefault();
      alert('Action désactivée.');
    };

    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    const disableShortcuts = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'v', 'x', 'a', 's', 'p'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        alert('Raccourci clavier désactivé.');
      }
    };

    const disableDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // Événements globaux
    document.addEventListener('copy', disableClipboard);
    document.addEventListener('cut', disableClipboard);
    document.addEventListener('paste', disableClipboard);
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableShortcuts);
    document.addEventListener('dragstart', disableDragStart);

    // Désactiver la sélection de texte
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    // Supprimer l'attribut draggable des images
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => {
      img.setAttribute('draggable', 'false');
    });

    return () => {
      document.removeEventListener('copy', disableClipboard);
      document.removeEventListener('cut', disableClipboard);
      document.removeEventListener('paste', disableClipboard);
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableShortcuts);
      document.removeEventListener('dragstart', disableDragStart);

      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
    };
  }, []);

  return null;
};

export default SecurityLayer;
