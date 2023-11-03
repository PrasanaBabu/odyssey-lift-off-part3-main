import { useQuery, gql } from "@apollo/client";
import React from "react";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";


const Track = () => {
    const GET_TRACK = gql`
        query GetTracks($trackId: ID!) {
          track(id: $trackId) {
            id
            title
            author {
              id
              name
              photo
            }
            thumbnail
            length
            modulesCount
            numberOfViews
            description
            modules {
              id
              title
              length
            }
          }
        }
    `
    const { trackId = ""}  = useParams();

    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: {trackId},
    });



    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                <TrackDetail track={data?.track}/>
            </QueryResult>

        </Layout>
    );
}

export default Track;
