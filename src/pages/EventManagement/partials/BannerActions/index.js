import React, { useMemo, useEffect, useState } from 'react';

import api from '../../../../services/api';

import Banner from './Banner';

import { useEvent } from '../../Context';

import { Container } from './styles';

export default function Banners({ match }) {
  const { id } = match.params;

  const { state, actions } = useEvent();
  const { banners } = state;

  const getBanners = async () => {
    const { data } = await api.get(`/banner?eventId=${id}`);

    if (data.length) {
      actions.setContext({
        tab: 'banners',
        value: data.map(banner => {
          const content = banner;

          return {
            id: banner.id,
            banner: content.image,
            title: content.title,
            subtitle: content.subtitle,
          };
        }),
      });
    }
  };

  useEffect(() => {
    getBanners();
  }, [id]);

  return useMemo(
    () => (
      <Container>
        {banners.map((banner, index) => (
          <Banner
            key={index}
            eventId={id}
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
