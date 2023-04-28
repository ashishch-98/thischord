import Layout from '@/lib/components/Layout';
import Listing from '@/lib/components/Listing';

type Props = {}

const AllKeys = (props: Props) => {

  const KeysData = [
    {
      title: 'D',
      slug: 'd',
      imageSrc: 'data:image/png;base64,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',
      imageAlt: 'd'
    },
    {
      title: 'G',
      slug: 'g',
      imageSrc: 'data:image/png;base64,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',
      imageAlt: 'g'
    },

  ]

  return (
    <Layout pageMetaData={{
      pageTitle: "Keys | thisChord",
      pageDescription: "Songs by artist",
    }}>
      <>
            <h1 className="text-3xl text-center font-medium text-teal-800 mb-10 ">
              ALL Keys
            </h1>
            <ul className="leading-8">
              {KeysData?.map((artist, index) => {
                const image = artist?.imageSrc;

                return (
                  <li key={index}>
                    <Listing
                      slugPrefix={{
                        path: "key",
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

export default AllKeys