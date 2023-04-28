import Layout from '@/lib/components/Layout';
import Listing from '@/lib/components/Listing';

type Props = {}

const AllArtists = (props: Props) => {

  const artistsData = [
    {
      title: 'Arijit Singh',
      slug: 'arijit-singh',
      imageSrc: 'data:image/jpeg;base64,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',
      imageAlt: 'Arijit'
    },
    {
      title: 'Atif Aslam',
      slug: 'atif-aslam',
      imageSrc: 'data:image/jpeg;base64,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',
      imageAlt: 'atif-aslam'
    },

  ]

  return (
    <Layout pageMetaData={{
      pageTitle: "Artists | thisChord",
      pageDescription: "Songs by artist",
    }}>
      <>
            <h1 className="text-3xl text-center font-medium text-teal-800 mb-10 ">
              ALL ARTISTS
            </h1>
            <ul className="leading-8">
              {artistsData?.map((artist, index) => {
                const image = artist?.imageSrc;

                return (
                  <li key={index}>
                    <Listing
                      slugPrefix={{
                        path: "artists",
                      }}
                      slug={artist?.slug}
                      imageSource={image}
                      imageAltText={artist?.imageAlt}
                      title={artist?.title}
                    />
                  </li>
                );
              })}
            </ul>
          </>

    </Layout>
  )
}

export default AllArtists