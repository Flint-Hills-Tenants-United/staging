import { defineThemeConfig } from '@utils/defineThemeConfig'
import logoImage from '@assets/img/logo.png'

export default defineThemeConfig({
  name: 'Flint Hills Tenants United',
  id: 'flint-hills-tenants-united',
  seo: {
    title: 'Flint Hills Tenants United',
    subtitle: 'Neighbors organizing for safe, affordable, dignified housing',
    description:
      'Flint Hills Tenants United is a tenant-led union in Manhattan and the Flint Hills of Kansas, organizing renters to win safe, affordable, and dignified housing.',
    image: logoImage,
  },
  logo: logoImage,
  colors: {
    primary: '#3a8069',
    secondary: '#33596f',
    neutral: '#ffffff',
    outline: '#33596f',
  },
  navigation: {
    darkmode: false,
    items: [
      { type: 'link', label: 'Home', href: '/' },
      {
        type: 'dropdown',
        label: 'About',
        items: [
          { label: 'Who We Are', href: '/who-we-are' },
          { label: 'Housing Crisis', href: '/housing-crisis' },
        ],
      },
      {
        type: 'dropdown',
        label: 'Tenants',
        items: [
          { label: 'Tenant Rights', href: '/tenant-rights' },
          { label: 'Tenant Resources', href: '/tenant-resources' },
        ],
      },
      // Jumps to the contact form in the footer of whatever page you're on.
      { type: 'link', label: 'Contact', href: '#contact' },
    ],
  },
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/flinthillstenantsunited',
      icon: 'lucide:instagram',
      external: true,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/FlintHillsTenantsUnited/',
      icon: 'lucide:facebook',
      external: true,
    },
  ],
})
