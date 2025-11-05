import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const colors = {
  primary: '#1a2a6c',
  secondary: '#b21f1f',
  accent: '#fdbb2d',
  success: '#28a745',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  gray: '#6c757d'
};

export const typography = {
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark,
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.dark,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark,
  },
  body: {
    fontSize: 16,
    color: colors.dark,
  },
  caption: {
    fontSize: 14,
    color: colors.gray,
  }
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 16,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.light,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: colors.white,
    marginVertical: 8,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 16,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: colors.light,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  businessHeader: {
    backgroundColor: colors.primary,
    padding: 20,
    alignItems: 'center',
  },
  businessName: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  businessContact: {
    color: colors.accent,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  }
});

export default globalStyles;
