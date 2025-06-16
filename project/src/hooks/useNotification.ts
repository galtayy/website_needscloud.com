import { useCallback } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

export const useNotification = () => {
  const showNotification = useCallback((message: string, type: NotificationType = 'info') => {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());

    // Get or create container
    let container = document.getElementById('notifications-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'notifications-container';
      container.className = 'fixed top-4 right-4 z-50 space-y-2';
      document.body.appendChild(container);
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const iconMap = {
      success: CheckCircle,
      error: XCircle,
      warning: AlertCircle,
      info: Info
    };

    const IconComponent = iconMap[type];
    
    notification.innerHTML = `
      <div class="flex items-start gap-3 p-4">
        <div class="flex-shrink-0">
          ${getIconSVG(type)}
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium text-gray-900">${message}</p>
        </div>
        <button class="notification-close flex-shrink-0 p-1 hover:bg-gray-100 rounded">
          ${getCloseSVG()}
        </button>
      </div>
    `;

    container.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        hideNotification(notification);
      });
    }

    // Auto close
    setTimeout(() => {
      hideNotification(notification);
    }, type === 'error' ? 8000 : 5000);
  }, []);

  const hideNotification = (notification: Element) => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  };

  return { showNotification };
};

const getIconSVG = (type: NotificationType) => {
  const colorMap = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500'
  };

  const pathMap = {
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z',
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };

  return `
    <svg class="w-5 h-5 ${colorMap[type]}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${pathMap[type]}"></path>
    </svg>
  `;
};

const getCloseSVG = () => {
  return `
    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  `;
};