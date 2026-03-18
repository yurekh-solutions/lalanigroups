import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent, endSession, getVisitorId } from '@/lib/tracking';

export const useTracking = () => {
  const location = useLocation();

  // Track page view on route change
  useEffect(() => {
    trackEvent('pageview', location.pathname);
  }, [location]);

  // Track WhatsApp click
  const trackWhatsApp = useCallback(() => {
    trackEvent('whatsapp', location.pathname);
  }, [location]);

  // Track phone click
  const trackPhone = useCallback(() => {
    trackEvent('phone', location.pathname);
  }, [location]);

  // Track form submission
  const trackForm = useCallback((formData: Record<string, unknown>) => {
    trackEvent('form', location.pathname, formData);
  }, [location]);

  // End session on unmount
  useEffect(() => {
    return () => {
      endSession();
    };
  }, []);

  return {
    trackWhatsApp,
    trackPhone,
    trackForm,
    visitorId: getVisitorId()
  };
};

export default useTracking;
