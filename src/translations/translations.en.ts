/* eslint-disable @typescript-eslint/camelcase */
import { IAppTranslations } from './translationsTypes';
import alertsJson from './locales/en/alerts.json';
import approvableWizardStepTextsJson from './locales/en/approvableWizardStep.json';
import balancesSectionTextsJson from './locales/en/balancesSection.json';
import commonsTextsJson from './locales/en/commons.json';
import connectWalletSectionTextsJson from './locales/en/connectWalletSection.json';
import guardianChangingWizardTextsJson from './locales/en/guardianChangingWizard.json';
import guardiansTableTextsJson from './locales/en/guardiansTable.json';
import restakingWizardTextsJson from './locales/en/restakingWizard.json';
import rewardsSectionTextsJson from './locales/en/rewardsSection.json';
import sectionTitlesTextsJson from './locales/en/sectionTitles.json';
import stakingWizardTextsJson from './locales/en/stakingWizard.json';
import unstakingWizardTextsJson from './locales/en/unstakingWizard.json';
import walletInfoSectionTextsJson from './locales/en/walletInfoSection.json';
import withdrawingWizardTextsJson from './locales/en/withdrawingWizard.json';
import wizardsCommonsTextsJson from './locales/en/wizardsCommons.json';

export const ENGLISH_TEXTS: IAppTranslations = {
  fontFamily: 'Montserrat',
  sectionTitles: sectionTitlesTextsJson,
  connectWalletSection: connectWalletSectionTextsJson,
  walletInfoSection: walletInfoSectionTextsJson,
  balancesSection: balancesSectionTextsJson,
  rewardsSection: rewardsSectionTextsJson,
  guardiansTable: guardiansTableTextsJson,
  wizardsCommons: wizardsCommonsTextsJson,
  approvableWizardStep: approvableWizardStepTextsJson,
  stakingWizard: stakingWizardTextsJson,
  guardianChangingWizard: guardianChangingWizardTextsJson,
  restakingWizard: restakingWizardTextsJson,
  unstakingWizard: unstakingWizardTextsJson,
  withdrawingWizard: withdrawingWizardTextsJson,
  alerts: alertsJson,
  commons: commonsTextsJson,
};
