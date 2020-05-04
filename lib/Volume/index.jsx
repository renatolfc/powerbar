import { container, arrow, content } from './style.jsx';

const render = ({output}) => {
  if (typeof output === 'undefined') return null;

  const icon = output.muted ? <i class="fas fa-volume-mute"/> : <i class="fas fa-volume-up"/>;

  return (
    <div style={container}>
      <div style={arrow}/>
      <div style={content}>
        {icon}&nbsp;{output.volume}%
      </div>
    </div>
  )
};

export default render;
