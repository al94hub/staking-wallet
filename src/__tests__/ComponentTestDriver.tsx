/**
 * Copyright 2019 the prism authors
 * This file is part of the prism library in the Orbs project.
 *
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 * The above notice should be included in all copies or substantial portions of the software.
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'mobx-react';
import { Guardians } from '../components/Guardians';
import { IServices } from '../services/Services';
import { IStores } from '../store/stores';

export class ComponentTestDriver {
  private services: Partial<IServices> = {};
  private stores: Partial<IStores> = {};

  withServices(services: Partial<IServices>): this {
    this.services = services;
    return this;
  }

  withStores(stores: Partial<IStores>): this {
    this.stores = stores;
    return this;
  }

  public render() {
    return render(
      <Provider {...this.services} {...this.stores}>
        <Guardians />
      </Provider>,
    );
  }
}