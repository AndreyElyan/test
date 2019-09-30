import React, { useMemo } from 'react';

import Banner from './Banner';

import { useEvent } from '../../Context';

import { Container } from './styles';

export default function Banners() {
  const { state, actions } = useEvent();
  const { banners } = state;

  return useMemo(
    () => (
      <Container>
        {banners.map((banner, index) => (
          <Banner
            key={index}
            isLast={index === banners.length - 1}
            addNewBanner={actions.banners.addNewBanner}
            deleteBanner={() => actions.banners.deleteBanner(index)}
            editBanner={({ label, value }) =>
              actions.banners.editBanner({ index, label, value })
            }
            banner={banner}
          />
        ))}
      </Container>
    ),
    [banners, actions.banners]
  );
}
