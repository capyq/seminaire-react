export type Event =
  | {
      type: 'LOG_IN';
      payload: {
        userId: string;
      };
    }
  | {
      type: 'SIGN_OUT';
      payload: never;
    };

type EventType = Event['type'];
type EventPayloadByType<TType extends EventType> = Extract<Event, { type: TType }>['payload'];

const sendEvent = <TType extends EventType>(eventType: TType, payload: EventPayloadByType<TType>) => {};

sendEvent('LOG_IN', { userId: 'toto' });
sendEvent('SIGN_OUT', { userId: 'toto' });
