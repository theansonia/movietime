export interface AvatarCircleProps {
  initial: string;
}

const AvatarCircle: React.SFC<AvatarCircleProps> = ({ initial }) => {
  return (
    <div className='avatar-circle'>
      <span id='profile' className='initials'>
        {initial}
      </span>
    </div>
  );
};

export default AvatarCircle;
