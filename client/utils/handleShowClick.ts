export const handleShowClick = (label: string) => {
  if (label === 'SHOW') {
    const pw = (document.getElementsByName(
      'password'
    ) as unknown) as HTMLInputElement;
    pw[0].type = 'text';
    return 'HIDE';
  } else {
    const pw = (document.getElementsByName(
      'password'
    ) as unknown) as HTMLInputElement;
    pw[0].type = 'password';
    return 'SHOW';
  }
};
