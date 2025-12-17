import React, { type ReactNode, useState } from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import { useAuth } from '../../components/Auth/AuthProvider';
import PersonalizedContent from '../../components/PersonalizedContent';
import '../../css/chapter-toggle.css';

type Props = WrapperProps<typeof DocItemType>;

// Extract clean slug from location path
const getSlugFromPath = (path: string): string => {
  const docsPrefix = '/docs/';
  if (path.startsWith(docsPrefix)) {
    return path.substring(docsPrefix.length);
  }
  return path.replace(/^\/+/, '');
};

export default function DocItemWrapper(props: Props): ReactNode {
  const location = useLocation();
  const { session } = useAuth();
  const slug = getSlugFromPath(location.pathname);

  // View Mode State: 'original' or 'personalized'
  const [viewMode, setViewMode] = useState<'original' | 'personalized'>('original');

  return (
    <>

      {/* 2. View Mode Toggles (Only if Logged In) */}
      {session?.user && (
        <div className="chapter-toggle-container">
          <div className="chapter-toggle-group">
            <button
              className={`chapter-toggle-btn chapter-toggle-btn-original ${viewMode === 'original' ? 'active' : ''}`}
              onClick={() => setViewMode('original')}
            >
              <span className="chapter-toggle-icon">📄</span>
              Original Lesson
            </button>
            <button
              className={`chapter-toggle-btn chapter-toggle-btn-personalized ${viewMode === 'personalized' ? 'active' : ''}`}
              onClick={() => setViewMode('personalized')}
            >
              <span className="chapter-toggle-icon">✨</span>
              Personalized for You
            </button>
          </div>
          {viewMode === 'personalized' && (
            <div className="chapter-toggle-info">
              Adapted for <strong>{session.user.proficiency}</strong> level & <strong>{session.user.tech_background}</strong> background.
            </div>
          )}
        </div>
      )}

      {/* 3. Main Content Area */}
      {viewMode === 'original' ? (
        // Show Standard Docusaurus Content
        <DocItem {...props} />
      ) : (
        // Show AI Personalized Content
        <PersonalizedContent />
      )}
    </>
  );
}
