import type { Schema, Attribute } from '@strapi/strapi';

export interface AcademySectionAcademy extends Schema.Component {
  collectionName: 'components_academy_section_academies';
  info: {
    displayName: 'Academy';
  };
  attributes: {
    H1Header: Attribute.String;
    Description: Attribute.Text;
    button: Attribute.String;
    backgroundimage: Attribute.Media;
    vedio: Attribute.Media;
  };
}

export interface CardsSectionCards extends Schema.Component {
  collectionName: 'components_cards_section_cards';
  info: {
    displayName: 'cards';
    icon: 'apps';
  };
  attributes: {
    image: Attribute.Media;
    date: Attribute.Date;
    Description: Attribute.Text;
    button: Attribute.String;
  };
}

export interface FanZoneSectionFanzone extends Schema.Component {
  collectionName: 'components_fan_zone_section_fanzones';
  info: {
    displayName: 'fanzone';
    icon: 'chartPie';
  };
  attributes: {
    H1Heading: Attribute.String;
    Description: Attribute.Text;
    button: Attribute.String;
    backgroundimage: Attribute.Media;
    coverpageImage: Attribute.Media;
  };
}

export interface FooterSectionFooter extends Schema.Component {
  collectionName: 'components_footer_section_footers';
  info: {
    displayName: 'footer';
    icon: 'apps';
  };
  attributes: {
    H1Heading: Attribute.String;
    socialIcons: Attribute.Media;
    logo: Attribute.Media;
    H2Header: Attribute.Text;
    h3header: Attribute.String;
    Description: Attribute.String;
    button: Attribute.String;
    copyrightinfo: Attribute.RichText;
  };
}

export interface HeroSectionHero extends Schema.Component {
  collectionName: 'components_hero_section_heroes';
  info: {
    displayName: 'Hero';
    icon: 'archive';
  };
  attributes: {
    backgroundVideo: Attribute.Media;
    H1Text: Attribute.String;
    H2Text: Attribute.String;
    Button: Attribute.String;
    headerbelowImager: Attribute.Media;
  };
}

export interface HoustonSectionHoustonYouthRugby extends Schema.Component {
  collectionName: 'components_houston_section_houston_youth_rugbies';
  info: {
    displayName: 'houston-youth-rugby';
    icon: 'chartPie';
  };
  attributes: {
    H1Header: Attribute.String;
    Description: Attribute.String;
    button: Attribute.String;
    H2Header: Attribute.String;
    Description2: Attribute.String;
    image: Attribute.Media;
    imagecards: Attribute.Component<'cards-section.cards', true>;
  };
}

export interface NavigationSectionNavigation extends Schema.Component {
  collectionName: 'components_navigation_section_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'eye';
  };
  attributes: {
    N1: Attribute.String;
    N2: Attribute.String;
    CurrentDate: Attribute.Date;
    socialIcons: Attribute.Media;
  };
}

export interface NavigationSectionNavigation2 extends Schema.Component {
  collectionName: 'components_navigation_section_navigation2s';
  info: {
    displayName: 'Navigation2';
    icon: 'check';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    navelement1: Attribute.String;
    button: Attribute.String;
    logo2: Attribute.Media;
  };
}

export interface NewsSectionNews extends Schema.Component {
  collectionName: 'components_news_section_news';
  info: {
    displayName: 'news';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    H1News: Attribute.String;
    Description: Attribute.Text;
    button: Attribute.String;
    card1: Attribute.Component<'cards-section.cards', true>;
    fanzone: Attribute.Component<'fan-zone-section.fanzone'>;
  };
}

export interface ScheduleSectionSchedule extends Schema.Component {
  collectionName: 'components_schedule_schedules';
  info: {
    displayName: 'schedule';
    icon: 'alien';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media;
    H1heading: Attribute.String;
    Description: Attribute.Text;
    viewschedulebutton: Attribute.String;
    bytticketbutton: Attribute.String;
  };
}

export interface SponsorshipsSectionSponsorships extends Schema.Component {
  collectionName: 'components_sponsorships_section_sponsorships';
  info: {
    displayName: 'sponsorships';
    icon: 'chartPie';
  };
  attributes: {
    carousels: Attribute.Media;
    H1Description: Attribute.Text;
    imagesextra: Attribute.Media;
  };
}

export interface TeamSectionTeam extends Schema.Component {
  collectionName: 'components_team_section_teams';
  info: {
    displayName: 'Team';
    icon: 'apps';
  };
  attributes: {
    H1Team: Attribute.String;
    Description: Attribute.Text;
    cardImage2: Attribute.Media;
    button: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'academy-section.academy': AcademySectionAcademy;
      'cards-section.cards': CardsSectionCards;
      'fan-zone-section.fanzone': FanZoneSectionFanzone;
      'footer-section.footer': FooterSectionFooter;
      'hero-section.hero': HeroSectionHero;
      'houston-section.houston-youth-rugby': HoustonSectionHoustonYouthRugby;
      'navigation-section.navigation': NavigationSectionNavigation;
      'navigation-section.navigation2': NavigationSectionNavigation2;
      'news-section.news': NewsSectionNews;
      'schedule-section.schedule': ScheduleSectionSchedule;
      'sponsorships-section.sponsorships': SponsorshipsSectionSponsorships;
      'team-section.team': TeamSectionTeam;
    }
  }
}
