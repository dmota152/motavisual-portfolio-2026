import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  size: 'small' | 'large';
  wideImage?: boolean;
}

type CategoryType = null | 'All' | 'Graphic Design' | 'Digital Campaigns' | 'Experiential Marketing';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(null);
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  useEffect(() => {
    const loadProjects = () => {
      const projectList: Project[] = [];

      for (let i = 1; i <= 52; i++) {
        projectList.push({
          id: i,
          title: `Graphic Design ${i}`,
          category: 'Graphic Design',
          description: 'Custom graphic design',
          imageUrl: `/Graphics__${i}.png`,
          size: 'small',
        });
      }

      const artistPosters: Array<{ filename: string; title: string; description: string }> = [
        { filename: 'Graphics__53.png', title: 'The Who', description: 'Artist poster design' },
        { filename: 'Graphics__54.png', title: 'Willie Nelson', description: 'Artist poster design' },
        { filename: 'Graphics__55.png', title: 'Elton John', description: 'Artist poster design' },
        { filename: 'DeadHead_.png', title: 'Dead & Company', description: 'Artist poster design' },
        { filename: 'Mariah_Xmas.png', title: 'Mariah Carey Christmas', description: 'Holiday poster design' },
        { filename: 'Morgan_Wallen_Poster.png', title: 'Morgan Wallen', description: 'Artist poster design' },
        { filename: 'Stevie.png', title: 'Stevie Wonder', description: 'Artist poster design' },
        { filename: 'Graphics__56.png', title: 'Artist Poster', description: 'Artist poster design' },
        { filename: 'Graphics__57.png', title: 'Artist Poster', description: 'Artist poster design' },
      ];

      artistPosters.forEach((project, index) => {
        projectList.push({
          id: 52 + index + 1,
          title: project.title,
          category: 'Graphic Design',
          description: project.description,
          imageUrl: `/${project.filename}`,
          size: 'small',
        });
      });

      const digitalCampaignsProjects: Array<{ filename: string; title: string; description: string }> = [
        { filename: 'ACA_SLIDE_1.png', title: 'ACA Campaign', description: 'Healthcare awareness campaign' },
        { filename: 'Billionaire_Tax_Slide_1.png', title: 'Billionaire Tax Campaign', description: 'Tax reform advocacy' },
        { filename: 'Black_History_Month_IG_Post.png', title: 'Black History Month', description: 'Cultural celebration campaign' },
        { filename: 'Congress_English_VL_Campus_Toolkit.png', title: 'Congress Campus Toolkit', description: 'Campus engagement initiative' },
        { filename: 'Democracy_English_VL_Campus_Toolkit.png', title: 'Democracy Toolkit', description: 'Civic engagement campaign' },
        { filename: 'EARTH_DAY_SLIDE_1_RVSD.png', title: 'Earth Day Campaign', description: 'Environmental awareness campaign' },
        { filename: 'East_LA_Walkouts_SLIDE_1.png', title: 'East LA Walkouts', description: 'Cultural heritage campaign' },
        { filename: 'FreeLiam_opt3.png', title: 'Free Liam Campaign', description: 'Social justice initiative' },
        { filename: 'VL_WHM_Option_1.png', title: 'Women\'s History Month', description: 'Empowerment campaign' },
        { filename: 'Digital Campaigns/ICE_Agents_ART_2.png', title: 'ICE Agents Campaign', description: 'Immigration rights advocacy' },
        { filename: 'VL_Street_Poster_ART_UNDER_5MB.png', title: 'Street Art Campaign', description: 'Urban poster campaign' },
        { filename: 'Digital Campaigns/National_BookLovers_ART.png', title: 'National Book Lovers Day', description: 'Literacy promotion campaign' },
        { filename: 'Digital Campaigns/NVRG_SLIDE_4.png', title: 'NVRG Campaign', description: 'Voter registration initiative' },
        { filename: 'Digital Campaigns/Vote_Early_Page1_NALFO_ENG.png', title: 'Vote Early Campaign', description: 'Early voting awareness' },
        { filename: 'Digital Campaigns/Dreams_Art_4.png', title: 'Dreams Campaign', description: 'Aspirational awareness campaign' },
        { filename: 'Digital Campaigns/Farmworkers_ART3.png', title: 'Farmworkers Campaign', description: 'Labor rights advocacy' },
        { filename: 'Digital Campaigns/Happy_Veterans_Day__.png', title: 'Veterans Day', description: 'Veterans appreciation campaign' },
        { filename: 'Digital Campaigns/IndependenceDay_2Centered_.png', title: 'Independence Day', description: 'Patriotic celebration campaign' },
        { filename: 'Digital Campaigns/Labor_Day_ART_Update.png', title: 'Labor Day', description: 'Workers recognition campaign' },
        { filename: 'Digital Campaigns/Superpower_post.png', title: 'Voting Superpower', description: 'Voter empowerment campaign' },
        { filename: 'Digital Campaigns/TuVoz_Post.png', title: 'Tu Voz Tu Voto', description: 'Latino voter engagement' },
        { filename: 'Digital Campaigns/VL-VR-Chispa-Michigan_English.png', title: 'Chispa Michigan', description: 'Voter registration partnership' },
        { filename: 'Digital Campaigns/VL-VR-Chispa-VoteEarly_psd.jpg', title: 'Chispa Vote Early', description: 'Early voting awareness' },
        { filename: 'Digital Campaigns/Vote_Early_Day_IG_Graphic.png', title: 'Vote Early Day', description: 'Early voting promotion' },
        { filename: 'Digital Campaigns/Census_SLIDE_1.png', title: 'Census Campaign', description: 'Census participation awareness' },
        { filename: 'Digital Campaigns/Immigrant_Voting_SLIDE_1.png', title: 'Immigrant Voting', description: 'Immigrant voter engagement' },
        { filename: 'Digital Campaigns/Checklist_Voting_2026.png', title: 'Voting Checklist 2026', description: 'Voter preparation guide' },
        { filename: 'Digital Campaigns/VL_LIVE_V2.png', title: 'Voto Latino Live', description: 'Live event campaign' },
        { filename: 'Digital Campaigns/VL_Mothers_Day.png', title: 'Mother\'s Day Campaign', description: 'Family values celebration' },
        { filename: 'Digital Campaigns/HHM_SLIDE_REMINDER_LastSlide.png', title: 'Hispanic Heritage Month', description: 'Cultural heritage campaign' },
        { filename: 'Digital Campaigns/32_Hour_Work_Week_SLIDE_1.png', title: '32 Hour Work Week', description: 'Labor reform advocacy' },
        { filename: 'Digital Campaigns/Ada_Limon_SLIDE_1.png', title: 'Ada Limon', description: 'Cultural spotlight campaign' },
        { filename: 'Digital Campaigns/Duke_V1.jpg', title: 'Duke Campaign', description: 'Community engagement initiative' },
        { filename: 'Digital Campaigns/Florida_Heat_Slide_1.png', title: 'Florida Heat Campaign', description: 'Climate awareness advocacy' },
        { filename: 'Digital Campaigns/VL_5Day_Countdown_Graphic.png', title: '5 Day Countdown', description: 'Election countdown campaign' },
        { filename: 'Digital Campaigns/CHISPA_AZ_English_October_7.png', title: 'Chispa Arizona', description: 'Arizona voter outreach' },
        { filename: 'Digital Campaigns/HHM_Art.png', title: 'Hispanic Heritage Art', description: 'Heritage celebration artwork' },
        { filename: 'Digital Campaigns/Indigenous_Peoples_ART.png', title: 'Indigenous Peoples Day', description: 'Cultural recognition campaign' },
        { filename: 'Digital Campaigns/Juneteenth_2025_full.png', title: 'Juneteenth Full', description: 'Freedom day celebration' },
        { filename: 'Digital Campaigns/ShopSmall_ART.png', title: 'Shop Small', description: 'Small business advocacy' },
        { filename: 'Digital Campaigns/Zoot_Suit_Post__.png', title: 'Zoot Suit', description: 'Cultural history spotlight' },
        { filename: 'Digital Campaigns/Graphics__58.png', title: 'Campaign Graphic 58', description: 'Digital campaign artwork' },
        { filename: 'Digital Campaigns/Graphics__59.png', title: 'Campaign Graphic 59', description: 'Digital campaign artwork' },
      ];

      digitalCampaignsProjects.forEach((project, index) => {
        projectList.push({
          id: 100 + index,
          title: project.title,
          category: 'Digital Campaigns',
          description: project.description,
          imageUrl: `/${project.filename}`,
          size: 'small',
        });
      });

      const experientialProjects: Array<{ filename: string; title: string; description: string; wideImage?: boolean }> = [
        { filename: 'Experiential Marketing/Exp_Marketing_1.png', title: 'Brand Activation', description: 'Immersive brand experience design' },
        { filename: 'Experiential Marketing/Exp_Marketing_2.png', title: 'Live Event Production', description: 'Large-scale event visual identity' },
        { filename: 'Experiential Marketing/Exp_Marketing_3.png', title: 'Pop-Up Experience', description: 'Interactive pop-up installation' },
        { filename: 'Experiential Marketing/Exp_Marketing_4.png', title: 'Venue Takeover', description: 'Full venue brand transformation' },
        { filename: 'Experiential Marketing/Exp_Marketing_5.png', title: 'Festival Activation', description: 'Festival brand presence and engagement' },
        { filename: 'Experiential Marketing/Exp_Marketing_6.png', title: 'Interactive Installation', description: 'Hands-on interactive brand display' },
        { filename: 'Experiential Marketing/Exp_Marketing_7.png', title: 'Community Activation', description: 'Community-driven engagement event' },
        { filename: 'Experiential Marketing/Exp_Marketing_8.png', title: 'Street Campaign', description: 'Guerrilla marketing activation' },
        { filename: 'Experiential Marketing/Exp_Marketing_Rvsd_9.png', title: 'Outdoor Activation', description: 'Open-air experiential engagement' },
        { filename: 'Experiential Marketing/Exp_Marketing_10.png', title: 'Event Showcase', description: 'Large-scale experiential showcase' },
        { filename: 'Experiential Marketing/Exp_Marketing_Rvsd_11.png', title: 'Stage Production', description: 'Live stage design and production' },
        { filename: 'Experiential Marketing/Exp_Marketing_Rvsd_12.png', title: 'Immersive Environment', description: 'Fully immersive brand environment' },
        { filename: 'Experiential Marketing/Exp_Marketing_Rvsd_13.png', title: 'Cultural Activation', description: 'Culture-driven brand experience' },
        { filename: 'Experiential Marketing/Exp_Marketing_Rvsd_14.png', title: 'Branded Installation', description: 'Custom branded environment build' },
        { filename: 'Experiential Marketing/Exp_Marketing_Rvsd_15.png', title: 'Crowd Engagement', description: 'Large-scale audience interaction' },
        { filename: 'Experiential Marketing/Exp_Marketing_16.png', title: 'Activation Booth', description: 'Interactive booth experience design' },
      ];

      experientialProjects.forEach((project, index) => {
        projectList.push({
          id: 200 + index,
          title: project.title,
          category: 'Experiential Marketing',
          description: project.description,
          imageUrl: `/${project.filename}`,
          size: 'small',
          wideImage: project.wideImage,
        });
      });

      setProjects(projectList);
    };

    loadProjects();
  }, []);

  const categories = [
    {
      name: 'Graphic Design' as CategoryType,
      description: 'Visual identity, posters, and branding that define cultural moments',
      previewImage: '/Morgan_Wallen_Poster.png',
      count: projects.filter(p => p.category === 'Graphic Design').length,
    },
    {
      name: 'Digital Campaigns' as CategoryType,
      description: 'Strategic digital experiences that capture feeds and drive engagement',
      previewImage: '/Congress_English_VL_Campus_Toolkit.png',
      count: projects.filter(p => p.category === 'Digital Campaigns').length,
    },
    {
      name: 'Experiential Marketing' as CategoryType,
      description: 'Immersive brand experiences that transform spaces into stories',
      previewImage: '/Experiential Marketing/Exp_Marketing_1.png',
      count: projects.filter(p => p.category === 'Experiential Marketing').length,
    },
  ];

  const filteredProjects = selectedCategory === null
    ? []
    : selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setLightboxProject(project);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!lightboxProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === lightboxProject.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
    } else {
      newIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0;
    }
    setLightboxProject(filteredProjects[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxProject) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxProject, filteredProjects]);

  return (
    <section id="work" className="min-h-screen py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-6xl md:text-7xl font-light tracking-tight mb-4">
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`group relative h-96 overflow-hidden ${category.count > 0 ? 'cursor-pointer' : 'cursor-default opacity-60'}`}
              onMouseEnter={() => category.count > 0 && setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => category.count > 0 && setSelectedCategory(category.name)}
            >
              <div className="absolute inset-0">
                <img
                  src={category.previewImage}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/95"></div>
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <div
                    className={`inline-block px-4 py-1 border mb-4 transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-white/20'
                    }`}
                  >
                    <span className={`text-xs tracking-widest ${
                      selectedCategory === category.name ? 'text-amber-500' : 'text-white/70'
                    }`}>
                      {selectedCategory === category.name ? 'VIEWING' : category.count > 0 ? 'EXPLORE' : 'COMING SOON'}
                    </span>
                  </div>
                  <h3 className="text-3xl font-light tracking-tight mb-3 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-2">
                    {category.description}
                  </p>
                  {category.count > 0 && (
                    <p className="text-amber-500 text-sm font-light">
                      {category.count} {category.count === 1 ? 'project' : 'projects'}
                    </p>
                  )}
                </div>

                <div
                  className={`flex items-center gap-3 text-sm tracking-wide transition-all duration-300 ${
                    hoveredCategory === category.name ? 'text-amber-500 translate-x-2' : 'text-white/70'
                  }`}
                >
                  <span>VIEW COLLECTION</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <div
                className={`absolute inset-0 border-2 transition-all duration-300 pointer-events-none ${
                  selectedCategory === category.name
                    ? 'border-amber-500'
                    : hoveredCategory === category.name
                    ? 'border-white/30'
                    : 'border-transparent'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {selectedCategory !== null && (
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-light mb-2">{selectedCategory === 'All' ? 'All Work' : selectedCategory}</h3>
              <p className="text-gray-400">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-6 py-3 border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-all duration-300 text-sm tracking-wide"
            >
              CLOSE
            </button>
          </div>
        )}

        {selectedCategory !== null && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              <div className={`${project.wideImage ? '' : 'aspect-square'} overflow-hidden flex items-center justify-center bg-zinc-900`}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full transition-transform duration-700 group-hover:scale-110 ${
                    project.wideImage
                      ? 'h-auto'
                      : project.category === 'Experiential Marketing'
                        ? 'h-full object-cover object-center'
                        : 'h-full object-contain'
                  }`}
                />

                <div
                  className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-amber-500 text-xs tracking-widest mb-3">
                        {project.category}
                      </div>
                      <h3 className="text-3xl font-light mb-4">{project.title}</h3>
                      <p className="text-gray-300 font-light">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-amber-500 tracking-wide">
                      <span>VIEW PROJECT</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>}
      </div>

      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div
            className="max-w-7xl w-full max-h-[90vh] overflow-y-auto flex flex-col items-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxProject.imageUrl}
              alt={lightboxProject.title}
              className="w-auto max-w-full h-auto object-contain"
            />
            <div className="mt-6 text-center pb-6">
              <div className="text-amber-500 text-xs tracking-widest mb-2">
                {lightboxProject.category}
              </div>
              <h3 className="text-3xl font-light mb-2">{lightboxProject.title}</h3>
              <p className="text-gray-400 font-light">{lightboxProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
