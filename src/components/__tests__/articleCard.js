import React from 'react';
import renderer from 'react-test-renderer';
import ArticleCard from '../ArticleCard';

describe('ArticleCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ArticleCard article={MOCK_ARTICLE} className="foo" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const MOCK_ARTICLE = {
  id: '53a9781d-e1b5-5d96-b460-9807cb6d2b7c',
  title: "Why China's Copycat Buildings Are Actually Good For Architecture",
  url:
    'https://www.businessinsider.com/why-chinas-copycat-buildings-are-actually-good-for-architecture-2013-4',
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
};
