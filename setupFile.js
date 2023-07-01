/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect';
import 'jest';

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
