const menuData = [
    {
      icon: 'simple-icon-notebook',
      label: 'Latest',
      to: "/latest",
    },
    {
      icon: 'simple-icon-star',
      label: 'Popular',
      to: "/popular",
    },
    {
      icon: 'simple-icon-social-dropbox',
      label: 'Tweaked',
      to: "/tweaked",
    }
  ];
  
  const data = [
    {
      id: 'gogo',
      to: "/user",
      subs: menuData
    }
  ];
  
  export default data;