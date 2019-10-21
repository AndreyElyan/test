import React, { memo, useState, useEffect } from 'react';

import api from '../../../../../services/api';

import Input from '../../../../../components/Input';

import add from '../../../../../assets/button/add.svg';

import {
  SponsorClass,
  WrapperSponsors,
  Button,
  WrapperSponsers,
} from './styles';

function SponsorCategory({ eventId }) {
  const [newSponsor, setNewSponsor] = useState('');
  const [sponsorsList, setSponsorsList] = useState([]);

  const handleAddSponsor = async e => {
    e.preventDefault();

    const reponse = await api.post(`/sponsor-category?eventId=${eventId}`, {
      title: newSponsor,
    });

    setNewSponsor('');
    setSponsorsList([...sponsorsList, reponse.data]);
  };

  const getSponsor = async () => {
    const response = await api.get(`/sponsor-category?eventId=${eventId}`);
    setSponsorsList(response.data);
  };

  useEffect(() => {
    getSponsor();
  }, []);

  return (
    <SponsorClass>
      <header>
        <strong>Classe dos Patrocinadores</strong>
      </header>

      <WrapperSponsers>
        {sponsorsList &&
          sponsorsList.map(element => (
            <Input width="335px" value={element.title} disabled />
          ))}
      </WrapperSponsers>

      <WrapperSponsors>
        <Input
          width="335px"
          value={newSponsor}
          onChange={value => setNewSponsor(value)}
        />
      </WrapperSponsors>

      <WrapperSponsors>
        <Button type="button" onClick={e => handleAddSponsor(e)}>
          <img src={add} alt="" />
          <strong>Adicionar Classe</strong>
        </Button>
      </WrapperSponsors>
    </SponsorClass>
  );
}

export default memo(SponsorCategory);
