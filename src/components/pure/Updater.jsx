import React from 'react';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';
import { LocalStoragePersistenceService } from '@3m1/service-worker-updater';
import '../../styles/Updater.scss';

const Updater = ({
  newServiceWorkerDetected,
  onLoadNewServiceWorkerAccept
}) => {
  return newServiceWorkerDetected ? (
    <div className="updater">
      Nueva versión dispobible
      <button onClick={onLoadNewServiceWorkerAccept}>Actualizar</button>
    </div>
  ) : null;
};

export default withServiceWorkerUpdater(Updater, {
  persistenceService: new LocalStoragePersistenceService('myApp')
});
