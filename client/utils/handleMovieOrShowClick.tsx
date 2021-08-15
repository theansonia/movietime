export const handleMovieOrShowClick = () => {
  const input = (document.getElementsByName(
    'search'
  ) as unknown) as HTMLInputElement;

  input[0].value = '';
};
