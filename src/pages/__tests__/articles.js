import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';
import ArticlesPage from '../work';

// Needed because StaticQuery is used in Layout component
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  );
});

describe('Articles', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ArticlesPage data={ArticlesPageQueryResp} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const ArticlesPageQueryResp = {
  site: {
    siteMetadata: {
      title: 'Vanessa Quirk',
    },
  },
  allContentfulArticleLink: {
    edges: [
      {
        node: {
          id: '53a9781d-e1b5-5d96-b460-9807cb6d2b7c',
          title:
            "Why China's Copycat Buildings Are Actually Good For Architecture",
          description: {
            description:
              'A leading-edge research firm focused on digital transformation.',
          },
          url:
            'https://www.businessinsider.com/why-chinas-copycat-buildings-are-actually-good-for-architecture-2013-4',
          articlePublishedTime: null,
          image: {
            sizes: {
              base64:
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/4gIcSUNDX1BST0ZJTEUAAQEAAAIMbGNtcwIQAABtbnRyUkdCIFhZWiAH3AABABkAAwApADlhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAF5jcHJ0AAABXAAAAAt3dHB0AAABaAAAABRia3B0AAABfAAAABRyWFlaAAABkAAAABRnWFlaAAABpAAAABRiWFlaAAABuAAAABRyVFJDAAABzAAAAEBnVFJDAAABzAAAAEBiVFJDAAABzAAAAEBkZXNjAAAAAAAAAANjMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAEZCAABYWVogAAAAAAAA9tYAAQAAAADTLVhZWiAAAAAAAAADFgAAAzMAAAKkWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPY3VydgAAAAAAAAAaAAAAywHJA2MFkghrC/YQPxVRGzQh8SmQMhg7kkYFUXdd7WtwegWJsZp8rGm/fdPD6TD////bAEMAEAsMDgwKEA4NDhIREBMYKBoYFhYYMSMlHSg6Mz08OTM4N0BIXE5ARFdFNzhQbVFXX2JnaGc+TXF5cGR4XGVnY//bAEMBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAAoAFAMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABAUG/8QAIBAAAgICAgIDAAAAAAAAAAAAAQIAAwQRITEFEhQiMv/EABYBAQEBAAAAAAAAAAAAAAAAAAEAA//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhES/9oADAMBAAIRAxEAPwDPePuGReFdilY/RHEf85T8dq7aX2joraEl4/1aoLwD2BHs52bHX2YnVZA2epOcrDKEWudTpnUHXWxCTe+TyYTXYUf/2Q==',
              aspectRatio: 1.7857142857142858,
              src:
                '//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=350&h=196&q=50&fit=scale',
              srcSet:
                '//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=88&h=49&q=50&fit=scale 88w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=175&h=98&q=50&fit=scale 175w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=350&h=196&q=50&fit=scale 350w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=525&h=294&q=50&fit=scale 525w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=700&h=392&q=50&fit=scale 700w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=1050&h=588&q=50&fit=scale 1050w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=1200&h=672&q=50&fit=scale 1200w',
              srcWebp:
                '//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=350&h=196&q=50&fm=webp&fit=scale',
              srcSetWebp:
                '//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=88&h=49&q=50&fm=webp&fit=scale 88w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=175&h=98&q=50&fm=webp&fit=scale 175w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=350&h=196&q=50&fm=webp&fit=scale 350w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=525&h=294&q=50&fm=webp&fit=scale 525w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=700&h=392&q=50&fm=webp&fit=scale 700w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=1050&h=588&q=50&fm=webp&fit=scale 1050w,\n//images.ctfassets.net/sruqohogh9hk/2wENuAEXPZRYEQVKbKzXg1/fc59808e4debd5f179f4be44ae694599/50e5abfeecad04d161000018_width_1200_format_jpeg?w=1200&h=672&q=50&fm=webp&fit=scale 1200w',
              sizes: '(max-width: 350px) 100vw, 350px',
            },
          },
        },
      },
      {
        node: {
          id: 'c0d3df8e-a2f3-5cb2-a8ed-0291c3502a05',
          title:
            'Sidewalk Labs | Introducing “City of the Future” — a Podcast from Sidewalk Labs',
          description: {
            description:
              'Each episode explores one idea or innovation that will transform cities.',
          },
          url:
            'https://sidewalklabs.com/blog/introducing-city-of-the-future-a-podcast-from-sidewalk-labs/',
          articlePublishedTime: null,
          image: {
            sizes: {
              base64:
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gI0SUNDX1BST0ZJTEUAAQEAAAIkYXBwbAQAAABtbnRyUkdCIFhZWiAH4QAHAAcADQAWACBhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzKGpWCJX8QTTiZE9XR6hWCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAAGVjcHJ0AAABZAAAACN3dHB0AAABiAAAABRyWFlaAAABnAAAABRnWFlaAAABsAAAABRiWFlaAAABxAAAABRyVFJDAAAB2AAAACBjaGFkAAAB+AAAACxiVFJDAAAB2AAAACBnVFJDAAAB2AAAACBkZXNjAAAAAAAAAAtEaXNwbGF5IFAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRleHQAAAAAQ29weXJpZ2h0IEFwcGxlIEluYy4sIDIwMTcAAFhZWiAAAAAAAADzUQABAAAAARbMWFlaIAAAAAAAAIPfAAA9v////7tYWVogAAAAAAAASr8AALE3AAAKuVhZWiAAAAAAAAAoOAAAEQsAAMi5cGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltzZjMyAAAAAAABDEIAAAXe///zJgAAB5MAAP2Q///7ov///aMAAAPcAADAbv/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAA0AFAMBEQACEQEDEQH/xAAXAAEAAwAAAAAAAAAAAAAAAAAHAQYI/8QAJRAAAQQCAQMEAwAAAAAAAAAAAQIDBREEEgAHITEGE0FRCCLR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAME/8QAHBEBAQEAAQUAAAAAAAAAAAAAAAECAxESIXHB/9oADAMBAAIRAxEAPwDDXTTporqirMZxJ2NjMtCEHGbkXPaRkKJOyd/CKSFHv86iu9gEiQ/G3HkmI1UPMwOOMv3GWn8mesOrSha9yksApFIV5oH9aNqA5k4888t79yz10+qauLPEBIjsiu6VJP0RzWmq8HNuxeUheiX2wQpTLl6rr4NcBDx/XWPKkXCs4+nchp9dEfVKJrgQ765aaXqmNqgPGQf5wP/Z',
              aspectRatio: 1.7857142857142858,
              src:
                '//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=350&h=196&q=50&fit=scale',
              srcSet:
                '//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=88&h=49&q=50&fit=scale 88w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=175&h=98&q=50&fit=scale 175w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=350&h=196&q=50&fit=scale 350w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=525&h=294&q=50&fit=scale 525w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=700&h=392&q=50&fit=scale 700w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=1050&h=588&q=50&fit=scale 1050w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=1200&h=672&q=50&fit=scale 1200w',
              srcWebp:
                '//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=350&h=196&q=50&fm=webp&fit=scale',
              srcSetWebp:
                '//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=88&h=49&q=50&fm=webp&fit=scale 88w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=175&h=98&q=50&fm=webp&fit=scale 175w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=350&h=196&q=50&fm=webp&fit=scale 350w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=525&h=294&q=50&fm=webp&fit=scale 525w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=700&h=392&q=50&fm=webp&fit=scale 700w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=1050&h=588&q=50&fm=webp&fit=scale 1050w,\n//images.ctfassets.net/sruqohogh9hk/2VKW1hBP9JAd87E0wLs9QJ/654b566206bae042e083666e53f45bed/18.10.02_SWL_Podcast-Newsletter-600x400.jpeg?w=1200&h=672&q=50&fm=webp&fit=scale 1200w',
              sizes: '(max-width: 350px) 100vw, 350px',
            },
          },
        },
      },
    ],
  },
};
