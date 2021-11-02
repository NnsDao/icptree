import React from 'react'

interface Props {
  name: string,
  url: string,
}

const Card: React.FC<Props> = ({ url,name }) => {
  return (
    <>
        <div className="p-6 max-w-sm mx-auto bg-cardColor rounded-xl shadow items-center space-x-4 mb-5">
            <a href={url} >
                <div className="text-xl font-medium text-white text-center hover:text-cyan-900">{name}</div>
            </a>
        </div>
    </>
  );
};

export default Card
