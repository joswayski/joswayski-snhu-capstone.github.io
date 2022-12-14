import { CalendarIcon, UsersIcon } from '@heroicons/react/solid';
import { ViewBoardsIcon } from '@heroicons/react/outline';
import Link from 'next/dist/client/link';
import { OpeningState, WEBSITE_URL } from '../../Config';
import * as Time from '../../utils/time';
import { ClickToCopy } from '../ClickToCopy';
import { Opening } from '../../entities';
import { findInTargetArray } from '../../utils/findInTargetArray';
import { IndexedEntities } from '../../types/main';
import { useAllStagesInOpening } from '../../SWR/useAllStagesInOpening';
import { Loader } from '../Loader';

interface OpeningsListItemProps {
  opening: Opening;
}

export const OpeningsListItem = ({ opening }: OpeningsListItemProps) => {
  /**
   * If the opening has stages, go to the first stage and view aplicants.
   * Otherwise, go to the settings page for the opening to create one
   */

  const { stages, isStagesError, isStagesLoading } = useAllStagesInOpening({
    openingId: opening.id,
  });

  if (isStagesLoading) {
    return <Loader text="Loading stages..."></Loader>;
  }

  if (isStagesError) return <h1>An error ocurred retrieving info for this opening</h1>;

  const endingUrl =
    opening?.totalStages > 0
      ? `stages/${stages[0].id}/applicants` // TODO should this end with applicants?
      : `settings`;

  const openingState = findInTargetArray({
    entity: IndexedEntities.OpeningState,
    targetArray: opening.target,
  });

  const orgId = findInTargetArray({
    entity: IndexedEntities.Org,
    targetArray: opening.target,
  });
  return (
    <li key={opening.id}>
      <Link href={`/openings/${opening.id}/${endingUrl}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium text-blue-600 truncate">{opening.name}</h1>
              <div className="ml-2 flex-shrink-0 flex">
                {openingState === OpeningState.PUBLIC ? (
                  <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Public
                  </p>
                ) : (
                  <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-gray-100 text-blue-gray-800">
                    Private
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-lg text-normal">
                  <UsersIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-light"
                    aria-hidden="true"
                  />
                  {opening?.totalApplicants}
                </p>
                <p className="mt-2 flex items-center text-lg text-normal sm:mt-0 sm:ml-6">
                  <ViewBoardsIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-light"
                    aria-hidden="true"
                  />
                  {opening?.totalStages}
                </p>
                {openingState === OpeningState.PUBLIC && (
                  <p className="mt-2 flex items-center text-lg text-normal sm:mt-0 sm:ml-6">
                    <ClickToCopy
                      showText="Application Link"
                      copyText={`${WEBSITE_URL}/${orgId}/${opening.id}/apply`}
                    />
                  </p>
                )}
              </div>
              <div className="mt-2 flex items-center text-md text-normal sm:mt-0">
                <CalendarIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-light"
                  aria-hidden="true"
                />
                <p>
                  Created{' '}
                  <time dateTime={new Date(opening.createdAt).toISOString()}>
                    {Time.relative(opening.createdAt)}
                  </time>
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
