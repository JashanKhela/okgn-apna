export const navbarQuery = `
*[_type == "navbar"][0]{
  logo{
    asset->{
      url
    }
  },
  navItems[]{
    label,
    href
  }
}
`;
