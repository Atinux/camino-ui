export const state = {
  titre: {
    couleurs: {
      neutral: ['neutral'],
      error: ['error', 'En attente de pièces…'],
      warning: ['warning', 'En instruction…'],
      success: ['success', 'Valide', 'En cours', 'Validé']
    }
  }
}

export default {
  namespaced: true,
  state
}
