import { create } from 'zustand';

export const useLoading = create((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export const useModal = create((set) => ({
  config: {
    title: '',
    icon: null,
    description: '',
  },
  open: false,
  openModal: (config) => set((state) => ({ config: { ...state.config, ...config }, open: true })),
  closeModal: () => set({ open: false }),
}));
