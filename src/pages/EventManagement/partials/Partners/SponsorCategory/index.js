import React, { memo } from 'react';

import Input from '../../../../../components/Input';

import add from '../../../../../assets/button/add.svg';

import {
  SponsorClass,
  WrapperSponsors,
  WrapperButtonClass,
  Button,
} from './styles';

function SponsorCategory({
  sponsor,
  addNewSponsor,
  deleteSponsor,
  editSponsor,
}) {
  return (
    <SponsorClass>
      <header>
        <strong>Classe dos Patrocinadores</strong>
      </header>

      <WrapperSponsors>
        <h1>1º</h1>
        <Input
          width="335px"
          value={sponsor.name}
          onChange={value => editSponsor({ label: 'name', value })}
          onSubmit={addNewSponsor}
        />
      </WrapperSponsors>

      <WrapperButtonClass>
        <Button type="button">
          <img src={add} alt="" />
          <strong>Adicionar Classe</strong>
        </Button>
      </WrapperButtonClass>
    </SponsorClass>
  );
}

export default memo(SponsorCategory);
