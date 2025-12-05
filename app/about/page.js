import Banner from '../component/banner'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Banner 
        title="Understanding Global Warming"
        subtitle="Our planet's climate is changing. Learn about the science, impacts, and solutions."
        imageSrc="/test1.jpg"
        imageAlt="Earth from space showing climate"
      />

      <div className="max-w-4xl mx-auto px-8 py-12">
        <p>안녕하세요@@@@</p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">What is Global Warming?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Global warming refers to the long-term increase in Earth's average surface temperature due to human activities, 
            primarily the emission of greenhouse gases like carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O).
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Since the late 19th century, Earth's average temperature has risen by approximately 1.1°C (2°F), 
            with most of the warming occurring in the past 40 years.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-700">Main Causes</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li className="text-lg">
              <strong>Burning Fossil Fuels:</strong> Coal, oil, and natural gas release CO₂ when burned for energy
            </li>
            <li className="text-lg">
              <strong>Deforestation:</strong> Trees absorb CO₂, so cutting them down reduces Earth's capacity to remove greenhouse gases
            </li>
            <li className="text-lg">
              <strong>Industrial Activities:</strong> Manufacturing and chemical processes release various greenhouse gases
            </li>
            <li className="text-lg">
              <strong>Agriculture:</strong> Livestock and rice cultivation produce methane
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">Impacts on Weather</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li className="text-lg">More frequent and intense heatwaves</li>
            <li className="text-lg">Stronger hurricanes and tropical storms</li>
            <li className="text-lg">Increased flooding and extreme precipitation</li>
            <li className="text-lg">Longer and more severe droughts</li>
            <li className="text-lg">Rising sea levels threatening coastal areas</li>
            <li className="text-lg">Melting polar ice caps and glaciers</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">What Can We Do?</h2>
          <p className="text-lg text-gray-700 mb-3">
            Every action counts in fighting climate change:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Reduce energy consumption and switch to renewable energy</li>
            <li>Use public transportation, bike, or walk when possible</li>
            <li>Reduce, reuse, and recycle</li>
            <li>Support sustainable and local food sources</li>
            <li>Plant trees and protect forests</li>
            <li>Advocate for climate-friendly policies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
