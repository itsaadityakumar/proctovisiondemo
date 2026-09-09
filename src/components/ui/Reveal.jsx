import { useInView } from '../../hooks/useInView';

export default function Reveal({ children, className = '', delay = 0, animation = 'reveal' }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`${animation}${isInView ? ' visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
