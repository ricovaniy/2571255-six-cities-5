import {Tabs} from '../../components/tabs/tabs.tsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import cn from 'classnames';
import {EmptyOfferList, OfferList} from './offer-list.tsx';
import {cityOffersSelector} from '../../store/selectors.ts';
import {changeCity} from '../../store/slices/city-slice.ts';
import {Spinner} from '../../components/spinner/spinner.tsx';

export function MainPage() {

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city.city);
  const offers = useAppSelector(cityOffersSelector);
  const isLoading = useAppSelector((state) => state.offers.offersLoadingStatus);

  const isEmpty = offers.length === 0;
  return (
    <main
      className={cn('page__main', 'page__main--index', {
        'page__main--index-empty': isEmpty,
      })}
    >
      <h1 className="visually-hidden">Cities</h1>
      <Tabs selectedCity={city}
        onClick={(c) => dispatch(changeCity(c))}
      />
      <div className="cities">
        {isLoading ? (
          <Spinner/>
        ) : (
          <div
            className={cn('cities__places-container', 'container', {
              'cities__places-container--empty': isEmpty,
            })}
          >
            {!isEmpty ? (
              <OfferList offers={offers} city={offers[0].city} />
            ) : (
              <EmptyOfferList city={city} />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
