'use client'

import { useState } from 'react'
import Banner from '../component/banner'

export default function BoardPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Record-breaking heatwave hits Europe',
      author: 'Climate News',
      date: '2025-12-01',
      content: 'Temperatures reached unprecedented levels across the continent...',
      views: 234
    },
    {
      id: 2,
      title: 'Arctic ice melting faster than predicted',
      author: 'Science Daily',
      date: '2025-11-28',
      content: 'New research shows alarming rates of ice loss in polar regions...',
      views: 189
    },
    {
      id: 3,
      title: 'Renewable energy adoption increases globally',
      author: 'Green Future',
      date: '2025-11-25',
      content: 'Solar and wind energy installations reach record numbers...',
      views: 156
    },
    {
      id: 4,
      title: 'Ocean temperatures continue to rise',
      author: 'Marine Research',
      date: '2025-11-20',
      content: 'Studies confirm ocean warming affecting marine ecosystems...',
      views: 198
    },
    {
      id: 5,
      title: 'Cities adapt to extreme weather events',
      author: 'Urban Planning',
      date: '2025-11-15',
      content: 'Metropolitan areas implement new infrastructure to handle climate change...',
      views: 142
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Banner 
        title="Weather & Climate Board"
        subtitle="Share and discuss climate news and weather updates from around the world"
        imageSrc="/test1.jpg"
        imageAlt="Weather and climate discussion board"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Weather & Climate Board</h2>
          <p className="text-gray-600">Share and discuss climate news and weather updates</p>
        </div>

        {/* Board Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-blue-600">{posts.length}</div>
            <div className="text-gray-600">Total Posts</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-green-600">
              {posts.reduce((sum, post) => sum + post.views, 0)}
            </div>
            <div className="text-gray-600">Total Views</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-purple-600">Active</div>
            <div className="text-gray-600">Community Status</div>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    No.
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Views
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr 
                    key={post.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 hover:text-blue-600">
                        {post.title}
                      </div>
                      <div className="text-sm text-gray-500 mt-1 truncate max-w-md">
                        {post.content}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.views}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Write Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors">
            Write Post
          </button>
        </div>
      </div>
    </div>
  )
}
