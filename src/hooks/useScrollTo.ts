
interface Props {
  offset?: number;
}

const useScrollTo = ({ offset = 0 }: Props = {}) => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        window.history.pushState(null, '', `#${id}`);
      }
    });
  };

  return scrollTo;
};

export default useScrollTo;