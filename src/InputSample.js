import React, { useState, useRef } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name='name'
        ref={nameInput}
        onChange={onChange}
        value={name}
        placeholder='이름'
      />
      <input
        name='nickname'
        onChange={onChange}
        value={nickname}
        placeholder='닉네임'
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
