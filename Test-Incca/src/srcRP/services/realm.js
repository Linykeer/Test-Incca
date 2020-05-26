import Realm from 'realm';

import RepositorySchema from '../../srcRP/schemas/RepositorySchema';

export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}
