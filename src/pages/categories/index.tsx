import Layout from '@/lib/components/Layout';
import Listing from '@/lib/components/Listing';

type Props = {}

const AllCategories = (props: Props) => {

  const CategoriesData = [
    {
      title: 'Fun',
      slug: 'fun',
      imageSrc: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageAlt: 'fun'
    },
    {
      title: 'Dance',
      slug: 'fun',
      imageSrc: 'https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&w=600',
      imageAlt: 'fun'
    },

  ]

  return (
    <Layout pageMetaData={{
      pageTitle: "Categories | thisChord",
      pageDescription: "Songs by categories",
    }}>
      <>
            <h1 className="text-3xl text-center font-medium text-teal-800 mb-10 ">
              ALL Categories
            </h1>
            <ul className="leading-8">
              {CategoriesData?.map((artist, index) => {
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

export default AllCategories