const imageAssets = require.context(
  "../assets",
  true,
  /\.(?:jpe?g|webp)$/i
);

const categories = {
  outdoor: { folder: "outdoor", label: "Outdoor furniture" },
  frameless: { folder: "unframed", label: "Frameless furniture" },
  bedsheets: { folder: "bedding", label: "Bedding" },
  curtains: { folder: "curtains", label: "Curtains" },
  beds: { folder: "beds", label: "Bed" },
  decor: { folder: "decor", label: "Decor" },
  sofas: { folder: "sofas", label: "Sofa" },
  poufs: { folder: "poufs", label: "Pouf" },
  chairs: { folder: "chairs", label: "Chair" },
  armchairs: { folder: "armchairs", label: "Armchair" },
};

const colors = ["beige", "gray", "white"];

function productsFor(category) {
  const { folder, label } = categories[category] ?? {};
  if (!folder) return [];

  const images = imageAssets
    .keys()
    .filter((path) => path.startsWith(`./${folder}/`))
    .sort()
    .map((path) => imageAssets(path));

  if (!images.length) return [];

  return images.map((image, index) => {
    const productImages = Array.from(
      { length: 4 },
      (_, offset) => images[(index + offset) % images.length]
    );

    return {
      id: `${index + 1}_${category}`,
      name: `${label} ${index + 1}`,
      product: label,
      collection: label,
      price: 25000 + index * 12500,
      rating: 5 - (index % 3) * 0.2,
      images: productImages,
      image,
      colors,
      material: "Fabric",
      isShown: true,
      characteristics: [{ dimensions: [] }, { options: [] }],
      technicalSpecifications: { sizes: {}, materials: {} },
      maintenance: [],
      packing: { text: "Sample data for local demo mode." },
      productDescription: { text: ["Sample product description."] },
      advantages: [],
    };
  });
}

export function getLocalData(path, page = 1, count = 18) {
  if (path === "news" || path === "reviews") return [];

  const data = productsFor(path);
  const start = (page - 1) * count;
  return data.slice(start, start + count);
}

export function getLocalLength(path) {
  return productsFor(path).length;
}

export function getLocalItem(id, path) {
  return productsFor(path).find((product) => product.id === id) ?? null;
}
