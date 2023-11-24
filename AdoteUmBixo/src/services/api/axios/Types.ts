


//tipo para controle de requisição
export type ultimoAcessoProps = {
  data: number,
  token: string,
  tipoToken: string,
  validade: number
}

//tipo de resposta da api

export interface requisicaoTokenProps {
  token_type: string;
	expires_in: number;
  access_token: string;
}

export interface AnimaisApiResponseProps {
    animals: AnimalApiResponseProps[]
}

export interface tokenResponse {
  token_type: string
  expires_in: number
  access_token: string
}

export interface AnimalApiResponseProps { 
    id: number;
    organization_id: string;
    url: string;
    type: string;
    species: string;
    breeds: Breeds;
    colors: Colors;
    age: string;
    gender: string;
    size: string;
    coat?: null;
    attributes: Attributes;
    environment: Environment;
    tags?: any[] | null;
    name: string;
    description: string;
    organization_animal_id: string;
    photos?: any[] | null;
    primary_photo_cropped?: null;
    videos?: any[] | null;
    status: string;
    status_changed_at: string;
    published_at: string;
    distance?: null;
    contact: Contact;
    _links: Links;
  }
  export interface photo {
    small?: string,
    medium?: string,
    large?: string,
    full?: string
  }

  export interface Breeds { 
    primary: string;
    secondary?: null;
    mixed: boolean;
    unknown: boolean;
  }
  export interface Colors { 
    primary?: null;
    secondary?: null;
    tertiary?: null;
  }
  export interface Attributes { 
    spayed_neutered: boolean;
    house_trained: boolean;
    declawed?: null;
    special_needs: boolean;
    shots_current: boolean;
  }
  export interface Environment { 
    children?: null;
    dogs?: null;
    cats?: null;
  }
  export interface Contact { 
    email: string;
    phone?: null;
    address: Address;
  }
  export interface Address { 
    address1: string;
    address2?: null;
    city: string;
    state: string;
    postcode: string;
    country: string;
  }
  export interface Self { 
    href: string;
  }
  export interface Links { 
    self: Self;
    type: Type;
    organization: Organization;
  }
  export interface Type { 
    href: string;
  }
  export interface Organization { 
    href: string;
  }
  