import type { FastBootDocument } from './private-types.ts';

export default interface ServiceRegistry {
  /**
   * ⚠️ This service is not provided by ember-page-title,
   *   but is needed by ember-page-title
   */
  '-document': FastBootDocument & { title?: string };
}
