import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image2base64 from 'image-to-base64';

import Select from '4all-ui/components/Select';
import Checkbox from '4all-ui/components/Checkbox';

import api from '../../../../services/api';
import { error } from '../../../../services/notifier';

import { useEvent } from '../../Context/index';

import Search from '../../../../components/Icons/Search';
import PickerImage from '../../../../components/Picker/Image';
import Input from '../../../../components/Input';
import InputDescription from '../../../../components/Input/InputDescription';
import {
  Table,
  Header as HeaderTable,
  Column,
  Row,
} from '../../../../components/Table';

import SponsorCategory from './SponsorCategory';

import {
  Container,
  NewPartner,
  Content,
  WrapperRegisters,
  WrapperImg,
  LabelWrapper,
  HeaderRow,
  Form,
  TableWrapper,
  WrapperSelect,
  Button,
  WrapperButtonPartner,
} from './styles';

export default function Partners({ match }) {
  const { id } = match.params;

  const [partnerActive, setPartnerActive] = useState(null);

  const [checked, setChecked] = useState(true);
  const [order] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sponsorsList, setSponsorsList] = useState([]);

  const [logoPreview, setLogoPreview] = useState(true);
  const [logo, setLogo] = useState(true);
  const [thumbPreview, setThumbPreview] = useState(true);
  const [thumb, setThumb] = useState(true);

  const { state, actions } = useEvent();
  const { partners } = state;

  const { partners: partnersActions, setContext } = actions;

  const getPartner = async () => {
    const { data } = await api.get(`/partner/${partnerActive}?eventId=${id}`);

    setContext({ tab: 'partners', value: data });
    setChecked(data.exhibitor);
    setLogo(data.logo);
    setLogoPreview(data.logo);
    setThumb(data.videoThumb);
    setThumbPreview(data.videoThumb);
  };

  useEffect(() => {
    getPartner();
  }, [partnerActive]);

  const getList = async () => {
    if (loading) return null;

    setLoading(true);

    try {
      const { data } = await api.get(`/partner?eventId=${id}`);
      setList(data);
    } catch (err) {
      error(err);
    } finally {
      setLoading(false);
    }
  };

  const newPartner = async () => {
    let data = null;

    try {
      const partner = {
        name: partners.name,
        description: partners.description,
        videoUrl: partners.videoUrl,
        siteUrl: partners.siteUrl,
        isExhibitor: checked,
        sponsorCategoryId: partners.sponsorCategoryId,
        videoThumb: `data:image/png;base64,${thumb}`,
        logo: `data:image/png;base64,${logo}`,
      };

      if (!partnerActive) {
        const response = await api.post(`/partner?eventId=${id}`, partner);
        data = response.data;
      } else {
        const response = await api.put(`/partner?eventId=${id}`, {
          id: partnerActive,
          ...partner,
        });
        data = response.data;
      }

      window.location.reload();

      return data;
    } catch (err) {
      error('Não foi possível guardar os dados');
    }
  };

  useEffect(() => {
    getList();
  }, [order]);

  const getSponsor = async () => {
    const response = await api.get(`/sponsor-category?eventId=${id}`);
    setSponsorsList(response.data);
  };

  useEffect(() => {
    getSponsor();
  }, []);

  async function handleChangeThumb(e) {
    const file = e.target.files[0];

    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setThumbPreview(imagePreview);

      const image = await image2base64(imagePreview);
      setThumb(image);
    }
  }

  async function handleChangeLogo(e) {
    const file = e.target.files[0];

    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setLogoPreview(imagePreview);

      const image = await image2base64(imagePreview);
      setLogo(image);
    }
  }

  const categorySelected = partners.sponsorCategoryId
    ? sponsorsList.find(sponsor => sponsor.id === partners.sponsorCategoryId)
    : null;

  return (
    <>
      <Container>
        <NewPartner>
          <header>
            <strong>Novo Parceiro</strong>
          </header>
          <Content>
            <WrapperImg>
              <strong>Logo</strong>
              <PickerImage
                name="logo"
                preview={logoPreview || logo}
                handleChange={handleChangeLogo}
              />
              <LabelWrapper>
                <div>
                  <strong>JPEG,JPG</strong>
                  <strong>ou PNG</strong>
                </div>
                <span>
                  <strong>Máximo</strong>
                  <strong>de 2Mb</strong>
                </span>
              </LabelWrapper>
            </WrapperImg>

            <WrapperImg>
              <strong>Thumb</strong>
              <PickerImage
                name="thumb"
                preview={thumbPreview || thumb}
                handleChange={handleChangeThumb}
              />

              <LabelWrapper>
                <div>
                  <strong>JPEG,JPG</strong>
                  <strong>ou PNG</strong>
                </div>
                <span>
                  <strong>Máximo</strong>
                  <strong>de 2Mb</strong>
                </span>
              </LabelWrapper>
            </WrapperImg>
          </Content>

          <Content>
            <div>
              <Input
                onChange={partnersActions.setName}
                value={partners.name}
                label="Nome do Patrocinador"
                width="420px"
              />
            </div>
            <div className="inputs">
              <InputDescription
                onChange={partnersActions.setDescription}
                value={partners.description}
                label="Descrição"
                width="420px"
                height="120px"
              />
            </div>
            <div className="inputs">
              <Input
                onChange={partnersActions.setSiteUrl}
                value={partners.siteUrl}
                label="Site"
                width="420px"
              />
            </div>

            <div className="inputs">
              <Input
                onChange={partnersActions.setVideoUrl}
                value={partners.videoUrl}
                label="Link do Vídeo"
                width="420px"
              />
              <Link to="/tutorial" target="_blank">
                Como adicionar vídeo no YouTube?
              </Link>
            </div>
            <WrapperSelect>
              <Select
                width="288px"
                placeholder="Selecione a Classe do Patrocinador"
                options={[
                  {
                    options: sponsorsList.map(sponsor => ({
                      value: sponsor.id,
                      label: sponsor.title,
                    })),
                  },
                ]}
                optionsListHeight="200px"
                iconColor="#fe324b"
                onChange={partnersActions.setSponsorCategoryId}
                value={
                  categorySelected
                    ? {
                        value: categorySelected.id,
                        label: categorySelected.title,
                      }
                    : null
                }
              />

              <Checkbox
                name="expositor"
                label="Expositor"
                customStyles={{ padding: ' 0 40px' }}
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </WrapperSelect>
            <WrapperButtonPartner>
              <Button onClick={newPartner}>
                <strong>Salvar Parceiro</strong>
              </Button>
            </WrapperButtonPartner>
          </Content>
        </NewPartner>

        <SponsorCategory eventId={id} />
      </Container>
      <WrapperRegisters>
        <header>
          <strong>Classe dos Patrocinadores</strong>
        </header>

        <HeaderRow>
          <Form onSubmit={() => {}}>
            <Input
              name="text"
              placeholder="Nome, tipo, data, local, último status..."
              icon={<Search />}
            />
          </Form>
        </HeaderRow>

        <TableWrapper>
          <Table>
            <HeaderTable>
              <Column width="45%">
                <strong>Nome do Parceiro</strong>
              </Column>
              <Column width="50%">
                <strong>Descrição</strong>
              </Column>
              <Column width="35%">
                <strong>Vídeo</strong>
              </Column>
            </HeaderTable>
            {list.partners &&
              list.partners.length > 0 &&
              list.partners.map(element => (
                <div
                  key={element.id}
                  onClick={() => {
                    setPartnerActive(element.id);
                  }}
                >
                  <Row>
                    <Column width="45%">
                      <p>{element.name}</p>
                    </Column>
                    <Column width="50%">
                      <p>{element.description}</p>
                    </Column>
                    <Column width="35%">
                      <p>{element.videoUrl}</p>
                    </Column>
                  </Row>
                </div>
              ))}
          </Table>
        </TableWrapper>
      </WrapperRegisters>
    </>
  );
}
