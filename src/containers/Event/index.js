import React, { useState, useContext } from 'react';

import Context, { INITIAL_STATE } from './context';

export const useEvent = () => useContext(Context);

export default function withEvent(WrappedComponent) {
  const WithEventComponent = props => {
    const [store, setStore] = useState(INITIAL_STATE);

    const setBanner = info => {
      setStore({
        ...store,
        bannerActions: info,
      });
    };

    const handleStore = (store, data) => {
      setStore({
        ...store,
        [store]: data,
      });
    };

    const actions = { setBanner, handleStore };

    return (
      <Context.Provider value={{ ...store, actions }}>
        <WrappedComponent {...props} />
      </Context.Provider>
    );
  };

  WithEventComponent.propTypes = {};

  return WithEventComponent;
}
